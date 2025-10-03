"use client";

import * as React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export function ContactModal({ open, onOpenChange }: Props) {
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState<null | string>(null);
    const [error, setError] = React.useState<null | string>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);
        setError(null);

        try {
            const res = await fetch("/api/send-to-sheets", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Request failed");
            }

            setSuccess("✅ Данные успешно отправлены!");
            setName("");
            setPhone("");

            // Авто-закрытие через 1.2 сек
            setTimeout(() => onOpenChange(false), 1200);

        } catch (err: any) {
            setError(err.message || "Не удалось отправить. Попробуйте ещё раз.");
            console.error("Ошибка отправки:", err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md rounded-2xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Оставьте заявку</DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                        Укажите имя и номер — мы свяжемся с вами.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Ваше имя</Label>
                        <Input
                            id="name"
                            placeholder="Иван"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="rounded-xl h-11"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="phone">Номер телефона</Label>
                        <Input
                            id="phone"
                            type="tel"
                            inputMode="tel"
                            placeholder="+7 777 000 00 00"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="rounded-xl h-11"
                        />
                    </div>

                    {success && (
                        <p className="text-sm text-green-600">{success}</p>
                    )}
                    {error && (
                        <p className="text-sm text-red-600">{error}</p>
                    )}

                    <DialogFooter className="sm:justify-start">
                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-11 rounded-xl font-semibold"
                        >
                            {loading ? "Отправка..." : "Отправить"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}