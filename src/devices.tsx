import { ActionPanel, Action, Icon, List } from "@raycast/api";
import { runAppleScript } from "run-applescript";

const DEVICES = [
  { id: "1", name: "iPhone", icon: "iphone.png" },
  { id: "2", name: "AirPods Pro", icon: "airpodsPro.png" },
  { id: "3", name: "AirPods Max", icon: "airpodsMax.png" },
];

export default function Command() {
  async function pingDevice(deviceName: string) {
    await runAppleScript(`
      tell application "System Events"
        key code 105 using {command down}
      end tell
      delay 1
      tell application "System Events"
        keystroke "where's my ${deviceName}"
        key code 36
      end tell
    `);
  }

  return (
    <List>
      {DEVICES.map((device) => (
        <List.Item
          key={device.id}
          icon={device.icon}
          title={device.name}
          actions={
            <ActionPanel>
              <Action title="Ping Device" onAction={() => pingDevice(device.name)} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
