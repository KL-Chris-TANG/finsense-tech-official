import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Send } from "lucide-react";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { getSiteCopy } from "@/data/siteCopy";
import { useLanguage } from "@/lib/language";

const defaultValues = {
  name: "",
  company: "",
  email: "",
  inquiryType: "",
  message: "",
};

type InquiryFormValues = typeof defaultValues;

const InquiryPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { language } = useLanguage();
  const copy = getSiteCopy(language).inquiry;
  const prefilledType = (searchParams.get("type") ?? "").slice(0, 80);

  const inquirySchema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(2, { message: copy.validation.nameMin }).max(100, { message: copy.validation.nameMax }),
        company: z.string().trim().min(2, { message: copy.validation.companyMin }).max(120, { message: copy.validation.companyMax }),
        email: z.string().trim().email({ message: copy.validation.emailInvalid }).max(255, { message: copy.validation.emailMax }),
        inquiryType: z.string().trim().min(2, { message: copy.validation.inquiryTypeMin }).max(80, { message: copy.validation.inquiryTypeMax }),
        message: z.string().trim().min(20, { message: copy.validation.messageMin }).max(1000, { message: copy.validation.messageMax }),
      }),
    [copy],
  );

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { ...defaultValues, inquiryType: prefilledType },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  useEffect(() => {
    if (prefilledType) {
      form.setValue("inquiryType", prefilledType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefilledType]);

  const onSubmit = async (values: InquiryFormValues) => {
    const parsed = inquirySchema.safeParse(values);

    if (!parsed.success) {
      toast.error(copy.invalidToast);
      return;
    }

    navigate("/inquiry/sent", {
      state: { name: parsed.data.name },
      replace: true,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-36 pb-20 md:pt-40">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <section className="space-y-6">
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <ArrowLeft className="h-4 w-4" />
                  {copy.back}
                </Link>
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">{copy.eyebrow}</p>
                  <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl">{copy.title}</h1>
                  <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">{copy.description}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/60 bg-card/50 p-5">
                    <p className="text-sm uppercase tracking-[0.16em] text-primary">{copy.bestFor}</p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy.bestForDescription}</p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-card/50 p-5">
                    <p className="text-sm uppercase tracking-[0.16em] text-primary">{copy.responseApproach}</p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy.responseApproachDescription}</p>
                  </div>
                </div>
              </section>
            </Reveal>

            <Reveal delay={120}>
              <section className="rounded-[28px] border border-border/60 bg-card/60 p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{copy.fullName}</FormLabel>
                            <FormControl>
                              <Input {...field} autoComplete="name" maxLength={100} placeholder={copy.fullNamePlaceholder} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{copy.company}</FormLabel>
                            <FormControl>
                              <Input {...field} autoComplete="organization" maxLength={120} placeholder={copy.companyPlaceholder} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{copy.email}</FormLabel>
                            <FormControl>
                              <Input {...field} autoComplete="email" maxLength={255} placeholder={copy.emailPlaceholder} type="email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="inquiryType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{copy.inquiryType}</FormLabel>
                            <FormControl>
                              <Input {...field} maxLength={80} placeholder={copy.inquiryTypePlaceholder} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{copy.message}</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="min-h-[180px] resize-y"
                              maxLength={1000}
                              placeholder={copy.messagePlaceholder}
                            />
                          </FormControl>
                          <FormDescription>{copy.messageDescription}</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm leading-7 text-muted-foreground">{copy.submitNote}</p>
                      <Button type="submit" size="lg" className="rounded-full px-8" disabled={form.formState.isSubmitting}>
                        <Send className="h-4 w-4" />
                        {copy.submit}
                      </Button>
                    </div>
                  </form>
                </Form>
              </section>
            </Reveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InquiryPage;
