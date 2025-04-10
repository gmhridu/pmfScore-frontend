import { PMFFormData } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateScoreDataSchema } from "@/types/generateScoreDataSchema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

export interface PMHFormProps {
  onSubmit: (formData: PMFFormData) => void;
  isLoading: boolean;
}

export interface PMHFormData {
  problem: string;
  audience: string;
  alternatives: string;
  unique_value: string;
  solution: string;
  channels: string;
  revenue: string;
  timing: string;
}

export default function PMForm({ onSubmit, isLoading }: PMHFormProps) {
  const form = useForm({
    resolver: zodResolver(generateScoreDataSchema),
    defaultValues: {
      problem: "",
      audience: "",
      alternatives: "",
      unique_value: "",
      solution: "",
      channels: "",
      revenue: "",
      timing: "",
    },
  });

  return (
    <div className="pmf-container">
      <Card className="pmf-card">
        <CardHeader className="mb-6">
          <CardTitle className="text-2xl font-bold text-center mb-2">
            PMF Score Calculator
          </CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Fill out the form below to evaluate your startup's product-market
            fit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="problem"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pmf-input-label">
                          Problem:
                        </FormLabel>
                        <p className="text-sm mb-1">
                          What problem are you solving?
                        </p>
                        <FormControl>
                          <Textarea
                            className="pmf-textarea"
                            {...field}
                            placeholder="Answer here"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="audience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pmf-input-label">
                          Target Audience:
                        </FormLabel>
                        <p className="text-sm mb-1">
                          Who is your target customer?
                        </p>
                        <FormControl>
                          <Textarea
                            className="pmf-textarea"
                            {...field}
                            placeholder="Answer here"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="alternatives"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pmf-input-label">
                          Current Alternatives:
                        </FormLabel>
                        <p className="text-sm mb-1">
                          What are current alternatives?
                        </p>
                        <FormControl>
                          <Textarea
                            className="pmf-textarea"
                            {...field}
                            placeholder="Answer here"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="unique_value"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pmf-input-label">
                          Unique Value Proposition:
                        </FormLabel>
                        <p className="text-sm mb-1">
                          What makes you different?
                        </p>
                        <FormControl>
                          <Textarea
                            className="pmf-textarea"
                            {...field}
                            placeholder="Answer here"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="solution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pmf-input-label">
                          Solution:
                        </FormLabel>
                        <p className="text-sm mb-1">
                          What's your core solution?
                        </p>
                        <FormControl>
                          <Textarea
                            className="pmf-textarea"
                            {...field}
                            placeholder="Answer here"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="channels"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pmf-input-label">
                          Distribution Channels:
                        </FormLabel>
                        <p className="text-sm mb-1">
                          How will you reach your customers?
                        </p>
                        <FormControl>
                          <Textarea
                            className="pmf-textarea"
                            {...field}
                            placeholder="Answer here"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="revenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pmf-input-label">
                          Revenue Model:
                        </FormLabel>
                        <p className="text-sm mb-1">
                          What's your revenue model?
                        </p>
                        <FormControl>
                          <Textarea
                            className="pmf-textarea"
                            {...field}
                            placeholder="Answer here"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="timing"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pmf-input-label">
                          Market Timing:
                        </FormLabel>
                        <p className="text-sm mb-1">
                          Why is now the right time?
                        </p>
                        <FormControl>
                          <Textarea
                            className="pmf-textarea"
                            {...field}
                            placeholder="Answer here"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button
                type={"submit"}
                className="w-full my-5 cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <Sparkles className="mr-2" />
                    <span>Analyzing...</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Sparkles className="mr-2" />
                    <span>Analyze</span>
                  </div>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
