"use client";
import Taskbar from "./taskbar";
import Action from "./action";
import Trending from "./Trending";
import More from "./more";
import MobileWarning from "./mobilecheck";

export default function Home() {
  return (
    <div className="background">
      <MobileWarning/>
      <Taskbar />
      <Action />
      <Trending />
      <More/>
    </div>
  );
}
