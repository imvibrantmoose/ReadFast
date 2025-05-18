import React from "react";
import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NotificationSettings: React.FC = () => {
  const [dailyReminders, setDailyReminders] = React.useState(true);
  const [milestones, setMilestones] = React.useState(true);
  const [tips, setTips] = React.useState(true);
  const [reminderTime, setReminderTime] = React.useState("18:00");

  return (
    <Card className="w-full bg-card">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bell className="h-6 w-6 text-primary" />
          <div>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Configure how and when you receive notifications
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="daily-reminders">Daily Practice Reminders</Label>
            <p className="text-sm text-muted-foreground">
              Receive daily reminders to practice your reading
            </p>
          </div>
          <Switch
            id="daily-reminders"
            checked={dailyReminders}
            onCheckedChange={setDailyReminders}
          />
        </div>

        {dailyReminders && (
          <div className="space-y-2 pl-6 border-l-2 border-muted ml-2">
            <Label htmlFor="reminder-time">Reminder Time</Label>
            <Select value={reminderTime} onValueChange={setReminderTime}>
              <SelectTrigger id="reminder-time">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="08:00">8:00 AM</SelectItem>
                <SelectItem value="12:00">12:00 PM</SelectItem>
                <SelectItem value="18:00">6:00 PM</SelectItem>
                <SelectItem value="20:00">8:00 PM</SelectItem>
                <SelectItem value="21:00">9:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="milestones">Milestone Celebrations</Label>
            <p className="text-sm text-muted-foreground">
              Get notified when you reach reading milestones
            </p>
          </div>
          <Switch
            id="milestones"
            checked={milestones}
            onCheckedChange={setMilestones}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="tips">Daily Tips & Tricks</Label>
            <p className="text-sm text-muted-foreground">
              Receive daily reading tips and motivational quotes
            </p>
          </div>
          <Switch id="tips" checked={tips} onCheckedChange={setTips} />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Save Notification Preferences</Button>
      </CardFooter>
    </Card>
  );
};

export default NotificationSettings;
