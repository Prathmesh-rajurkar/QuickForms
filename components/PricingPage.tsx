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
    <div className="grid grid-cols-3 gap-4 m-4">
      {pricingPlan.map((plan: PricingPlan, index: number) => (
        <Card key={index} className="flex flex-col justify-between w-[350px]">
          <CardHeader className="flex flex-row gap-2 items-center">
            <CardTitle>{plan.level}</CardTitle>
            {
                plan.level === "Pro" && <Badge className="rounded-full bg-orange-600 hover:bg-null">🔥Popular</Badge>
            }
            {/* <CardDescription>
              Deploy your new project in one-click
            </CardDescription> */}
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{plan.price}</p>
            <ul>
                {
                    plan.services.map((item:string,index:number)=>(
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant={"destructive"}>
                Cancle
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default PricingPage;
