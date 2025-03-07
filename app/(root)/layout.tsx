import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import PageHeader from "@/components/page-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="flex flex-col md:flex-row w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content area */}
        <div className="flex-1 h-screen overflow-auto bg-white dark:bg-[#131119]">
          <PageHeader />
          {children}
        </div>
      </section>
    </main>
  );
}
