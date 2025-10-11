"use client";
import { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import PrimaryButton from "@/components/PrimaryButton";

export default function DiscoverPage() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Layout>
      <Hero
        titleBlack="The Canadian"
        titleRed="Academy"
        subtitle="Master Languages. Connect Globally..."
        buttons={
          <>
            <PrimaryButton label="Contact Us" href="/contact" variant="solid" />
            <PrimaryButton
              label="Say Hello"
              onClick={() => setShowMessage(true)}
              variant="outline"
            />
          </>
        }
      />
      {showMessage && (
        <div className="mt-6 text-center text-red-600 font-semibold">
          👋 Hello from The Canadian Academy!
        </div>
      )}
    </Layout>
  );
}
