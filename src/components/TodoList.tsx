"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Healthcare To-Do List</h1>

      {/* Calendar Picker */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">

          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="checkup" defaultChecked />
              <label htmlFor="checkup" className="text-sm text-muted-foreground">
                Book annual health check-up
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="medication" />
              <label htmlFor="medication" className="text-sm text-muted-foreground">
                Take prescribed medication
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="hydration" />
              <label htmlFor="hydration" className="text-sm text-muted-foreground">
                Drink 8 glasses of water
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="exercise" />
              <label htmlFor="exercise" className="text-sm text-muted-foreground">
                30-minute workout or walk
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="appointment" />
              <label htmlFor="appointment" className="text-sm text-muted-foreground">
                Schedule doctor’s appointment
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="bp" />
              <label htmlFor="bp" className="text-sm text-muted-foreground">
                Record blood pressure
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="diet" />
              <label htmlFor="diet" className="text-sm text-muted-foreground">
                Track daily meals / nutrition
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="rest" />
              <label htmlFor="rest" className="text-sm text-muted-foreground">
                Get 7–8 hours of sleep
              </label>
            </div>
          </Card>

        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
