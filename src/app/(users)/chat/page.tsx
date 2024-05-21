import { ChatsPage } from "@/components";
import { StateCookie } from "@/middleware";
import { cookies } from "next/headers";

export const metadata = {
    title: "chat",
    description: "chat",
};
export default async function ChatPage() {
    const cookieStore = cookies();
    const state = cookieStore.get("auth-store")?.value;
    const parsedCookie: { state: StateCookie } = JSON.parse(state ?? "{}");
    
    return <ChatsPage user={parsedCookie.state.user} />;
}
