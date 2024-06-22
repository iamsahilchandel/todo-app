import Providers from "../providers";
import { auth } from "@/auth";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return <Providers session={session.data}>{children}</Providers>;
}
