import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      reset();
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">{t('contact.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="border-border bg-card">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('contact.email.title')}</h3>
                  <a href="mailto:contact@koreanfamiliesadvocates.org" className="text-primary hover:underline">
                    contact@koreanfamiliesadvocates.org
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('contact.form.name')}
                  </label>
                  <Input 
                    id="name" 
                    placeholder={t('contact.form.name')} 
                    className="w-full"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('contact.form.email')}
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder={t('contact.form.email')} 
                    className="w-full"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder={t('contact.form.phone')} 
                    className="w-full"
                    {...register("phone")}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder={t('contact.form.message')} 
                    className="w-full min-h-[150px]"
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : t('contact.form.send')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
