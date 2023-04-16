import { CircleNotch } from "phosphor-react";

export function Loading() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <CircleNotch size={48} weight="bold" className="animate-spin  text-orange-500"/>
        </div>
    )
}