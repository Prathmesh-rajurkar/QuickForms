import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { PricingPlan, pricingPlan } from "@/lib/pricingplan";
import { Badge } from "./ui/badge";

function PricingPage() {
  return (
    <div>
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">Plan and Pricing</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 m-4">
        {pricingPlan.map((plan: PricingPlan, index: number) => (
          <Card
            key={index}
            className={`${
              plan.level === "Enterprise" ? "bg-[#1c1c1c] text-white" : null
            } flex flex-col justify-between w-[350px]`}
          >
            <CardHeader className="flex flex-row gap-2 items-center">
              <CardTitle>{plan.level}</CardTitle>
              {plan.level === "Pro" && (
                <Badge className="rounded-full bg-orange-600 hover:bg-null">
                  🔥Popular
                </Badge>
              )}
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-2xl font-bold">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.services.map((item: string, index: number) => (
                  <li key={index}>
                    <span className="text-green-500 font-bold">✓ </span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-center">
              <Button
                className={`${plan.level === "Enterprise" && "text-black"}`}
                variant={"secondary"}
              >
                Get Started For {plan.level}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PricingPage;
