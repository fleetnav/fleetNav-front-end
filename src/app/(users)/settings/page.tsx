import { FormEditProfile } from "@/components/settings/FormEditProfile";
import { title } from "process";

export const metadata = {
  title: " settings",
};
export default function SettingsPage() {
  return (
    <section className="h-full w-dvh border border-red-400 p-16">
      <div>
        <h2 className="text-3xl">Settings</h2>
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>
      </div>
      <FormEditProfile></FormEditProfile>
    </section>
  );
}
