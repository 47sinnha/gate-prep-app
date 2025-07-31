// GATE Prep App - Main UI with Features
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AlarmClock, CalendarCheck, NotebookPen, Timer, Sparkles } from "lucide-react";

export default function GatePrepApp() {
  return (
    <div className="p-6 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-800 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6 text-center animate-pulse">🚀 GATE Mastery Hub</h1>
      <Tabs defaultValue="tasks" className="w-full max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-3 sm:grid-cols-6 bg-white text-black">
          <TabsTrigger value="tasks"><CalendarCheck className="inline mr-1" /> Daily Tasks</TabsTrigger>
          <TabsTrigger value="alarm"><AlarmClock className="inline mr-1" /> Alarm</TabsTrigger>
          <TabsTrigger value="timer"><Timer className="inline mr-1" /> Practice Timer</TabsTrigger>
          <TabsTrigger value="forget"><NotebookPen className="inline mr-1" /> Forget List</TabsTrigger>
          <TabsTrigger value="discover"><Sparkles className="inline mr-1" /> New Learnings</TabsTrigger>
          <TabsTrigger value="monthly">📆 Monthly Target</TabsTrigger>
        </TabsList>

        <TabsContent value="tasks">
          <Card className="mt-4 bg-indigo-200 text-black">
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Write today's tasks</h2>
              <Textarea placeholder="E.g., Revise Trees, Solve 10 DSA questions..." />
              <Button className="bg-indigo-700 hover:bg-indigo-800">Save Task</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alarm">
          <Card className="mt-4 bg-red-200 text-black">
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Set Wake-up Alarm</h2>
              <Input type="time" />
              <Button className="bg-red-700 hover:bg-red-800">Set Alarm</Button>
              <p className="text-sm">(This alarm is non-dismissible without solving a GATE-level question)</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timer">
          <Card className="mt-4 bg-yellow-100 text-black">
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Start Practice Timer</h2>
              <Button className="bg-yellow-600 hover:bg-yellow-700">Start 60-min Timer</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forget">
          <Card className="mt-4 bg-blue-100 text-black">
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Things I'm Forgetting</h2>
              <Textarea placeholder="E.g., Pipeline hazards in COA..." />
              <Button className="bg-blue-700 hover:bg-blue-800">Save Note</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="discover">
          <Card className="mt-4 bg-green-100 text-black">
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">New Learnings</h2>
              <Textarea placeholder="E.g., Shortest job first scheduling priority..." />
              <Button className="bg-green-700 hover:bg-green-800">Add Learning</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly">
          <Card className="mt-4 bg-pink-100 text-black">
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Monthly Target</h2>
              <Textarea placeholder="E.g., Finish Algorithms + DSA + PYQs..." />
              <Button className="bg-pink-700 hover:bg-pink-800">Set Target</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
