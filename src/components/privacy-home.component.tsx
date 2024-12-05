"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function PrivacyPolicy() {
  const [showPrivacySection, setShowPrivacySection] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("hasAcceptedCookies");
    if (!hasAcceptedCookies) {
      setShowPrivacySection(true);
    }
  }, []);

  const handleAllowCookies = () => {
    localStorage.setItem("hasAcceptedCookies", "true");
    setShowPrivacySection(false);
  };

  const handleDeclineCookies = () => {
    setShowPrivacySection(false);
  };
  if (!showPrivacySection) return null;

  return (
    <Card className="fixed bottom-2 left-0 right-0 z-[1800] flex w-full flex-col items-start justify-start gap-4 p-6 lg:bottom-6 lg:left-6 lg:right-0 lg:w-[400px] lg:p-8">
      <p>
        Usamos cookies primários para melhorar nossos serviços.{" "}
        <Link href="/terms-services" className="text-muted-foreground">
          Saber Mais
        </Link>
      </p>
      <div className="flex items-center justify-start gap-4">
        <Button onClick={handleAllowCookies}>Permitir</Button>
        <Button variant="outline" onClick={handleDeclineCookies}>
          Não permitir
        </Button>
      </div>
    </Card>
  );
}
