import { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { api } from "@/lib/axios";

interface Prompt {
    id: string;
    title: string;
    template: string;
}

interface onPromptSelected {
    onPrompSelected: (template: string) => void;
}

export default function PromptSelect({ onPrompSelected }: onPromptSelected) {
    const [prompts, setPrompts] = useState<Prompt[] | null>(null);

    useEffect(() => {
        api.get("/prompts").then((res) => {
            setPrompts(res.data);
        });
    }, []);

    function handlePromptSelected(id: string) {
        const selectedPrompts = prompts?.find((p) => p.id === id);

        if (!selectedPrompts) return;

        onPrompSelected(selectedPrompts.template);
    }

    return (
        <Select onValueChange={handlePromptSelected}>
            <SelectTrigger>
                <SelectValue placeholder="Selecione um prompt..." />
            </SelectTrigger>
            <SelectContent>
                {prompts?.map((prompt) => (
                    <SelectItem key={prompt.id} value={prompt.id}>
                        {prompt.title}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
