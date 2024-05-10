import { Button, Input, Image as UiImage } from "@nextui-org/react";

export const metadata = {
    title: "chat",
    description: "chat",
};
export default function ChatPage() {
    return (
        <div className="flex w-full gap-8 h-full">
            <aside className="flex flex-col gap-6 w-1/4 rounded-lg p-8 border min-h-full h-full">
                {/* top inbox  */}
                <div className=" border-b flex justify-between w-full h-[10%]">
                    <h3 className="text-2xl">inbox</h3>

                    <span className="icon-[solar--chat-round-unread-broken] text-4xl" role="img" aria-hidden="true" />
                </div>

                <div className=" w-full rounded-lg p-4 bg-white/10">
                    <div className=" flex justify-start gap-4">
                        <UiImage
                            width={100}
                            height={100}
                            // radius="full"
                            classNames={{ img: "rounded-full size-[50px] object-cover", wrapper: "rounded-full" }}
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />

                        <div className="h-full w-1/2">
                            <h1 className="">Juan pablo</h1>
                            <span className="w-5 text-ellipsis text-sm  text-white/50 truncate">hola</span>
                        </div>
                    </div>
                </div>

                <div className=" w-full rounded-lg p-4 ">
                    <div className=" flex justify-start gap-4">
                        <UiImage
                            width={100}
                            height={100}
                            // radius="full"
                            classNames={{ img: "rounded-full size-[50px] object-cover", wrapper: "rounded-full" }}
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />

                        <div className="h-full w-1/2">
                            <h1 className="">Juan pablo</h1>
                            <span className="w-5 text-ellipsis text-sm  text-white/50 truncate">hola</span>
                        </div>
                    </div>
                </div>
                <div className=" w-full rounded-lg p-4 ">
                    <div className=" flex justify-start gap-4">
                        <UiImage
                            width={100}
                            height={100}
                            // radius="full"
                            classNames={{ img: "rounded-full size-[50px] object-cover", wrapper: "rounded-full" }}
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />

                        <div className="h-full w-1/2">
                            <h1 className="">Juan pablo</h1>
                            <span className="w-5 text-ellipsis text-sm  text-white/50 truncate">hola</span>
                        </div>
                    </div>
                </div>

                <div className=" w-full border-b shadow-sm shadow-white/50 rounded-lg p-4 ">
                    <div className=" flex justify-start gap-4">
                        <UiImage
                            width={100}
                            height={100}
                            // radius="full"
                            classNames={{ img: "rounded-full size-[50px] object-cover", wrapper: "rounded-full" }}
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />

                        <div className="h-full w-1/2">
                            <h1 className="">Juan pablo</h1>
                            <span className="w-5 text-ellipsis text-sm  text-white/50 truncate">hola</span>
                        </div>
                    </div>
                </div>
            </aside>

            <section className="w-full border p-8 gap-4 rounded-lg flex flex-col  h-full">
                {/* top section */}
                <div className="relative flex justify-start items-center px-16 gap-4">
                    <div className="relative flex justify-start items-center gap-4  ">
                        <UiImage
                            width={100}
                            height={100}
                            // radius="full"
                            classNames={{ img: "rounded-full size-[80px] object-cover", wrapper: "rounded-full" }}
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <h3 className="font-bold text-3xl">Juan Pablo</h3>
                        <div className=" size-8 bg-green-500 top-0 -right-12 rounded-full absolute" />
                    </div>
                </div>

                {/* messages and form container  */}
                <div className="h-full w-full justify-center items-center rounded-lg border  bg-white/10">
                    <div className=" flex flex-col  justify-end items-start w-full gap-8  h-[90%] p-10">
                        <div className=" flex gap-4">
                            <UiImage
                                width={100}
                                height={100}
                                // radius="full"
                                classNames={{ img: "rounded-full size-[50px] object-cover", wrapper: "rounded-full" }}
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />

                            <div className="bg-[#002047] max-w-[40%] rounded-lg p-4 ">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo animi velit quod
                                consectetur consequuntur odio quis necessitatibus magnam reiciendis ex non, et ratione
                                ea impedit doloribus ducimus culpa quibusdam error?
                            </div>
                        </div>
                        <div className=" flex gap-4">
                            <UiImage
                                width={100}
                                height={100}
                                // radius="full"
                                classNames={{ img: "rounded-full size-[50px] object-cover", wrapper: "rounded-full" }}
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />

                            <div className="bg-[#002047] max-w-[40%] rounded-lg p-4 ">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo animi velit quod
                                consectetur consequuntur odio quis necessitatibus magnam reiciendis ex non, et ratione
                                ea impedit doloribus ducimus culpa quibusdam error?
                            </div>
                        </div>
                    </div>

                    <form className="w-[80%] flex  gap-8 m-auto h-[10%] bg ">
                        <Input className="rounded-lg" size="lg" variant="faded" placeholder="write message" />

                        <Button size="lg" variant="faded">
                            <span className="icon-[bi--send] text2xl" role="img" aria-hidden="true" />
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
}
