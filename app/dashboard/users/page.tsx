import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UserTableAdmin from "@/components/Tables/TableUsers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HealEnroll",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const UserTablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />
      <div className="flex flex-col gap-10">
        <UserTableAdmin />
      </div>
    </DefaultLayout>
  );
};

export default UserTablesPage;
