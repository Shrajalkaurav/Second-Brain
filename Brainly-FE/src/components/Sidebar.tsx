import { Logo } from "./icons/Logo";
import { TwitterIcon } from "./icons/TwitterIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <div className="h-screen bg-white border-r w-72 fixed pl-6 left-0 top-0 ">
      <div className="flex text-2xl pt-8 items-center">
        <div className="pr-2 pl-2 text-purple-600">
          <Logo />
        </div>
        Second-Brain
      </div>
      <div className="pt-8 pl-4">
        <SidebarItem text={"Twitter"} icon={<TwitterIcon />} />
        <SidebarItem text={"Youtube"} icon={<YoutubeIcon />} />
      </div>
    </div>
  );
}
