import HealthEnrollDashBoard from "@/components/Dashboard/HealthEnrollDashBoard";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HealthEnroll DashBoard",
  description: "This is HealthEnrol lDashBoard",
};

const DashBoard = () => {
  return (
    <>
      <DefaultLayout>
        <HealthEnrollDashBoard />
      </DefaultLayout>
    </>
  );
};

export default DashBoard;
