// import SpecialitiesManagementHeader from "@/components/modules/Admin/SpecialitiesManagement/SpecialitiesManagementHeader";
// import SpecialitiesTable from "@/components/modules/Admin/SpecialitiesManagement/SpecialitiesTable";
// import RefreshButton from "@/components/shared/RefreshButton";
// import TablePagination from "@/components/shared/TablePagination";
// import { TableSkeleton } from "@/components/shared/TableSkeleton";
// import { getSpecialities } from "@/services/admin/specialitiesManagement";
// import { Suspense } from "react";

// const AdminSpecialitiesManagementPage = async () => {
//   const result = await getSpecialities();
//   return (
//     <div className="space-y-6">
//       <SpecialitiesManagementHeader />
//       <div className="flex">
//         <RefreshButton />
//       </div>
//       <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
//         <SpecialitiesTable specialities={result.data} />
//         <TablePagination
//           currentPage={result?.meta?.page || 1}
//           totalPages={result?.meta?.totalPages || 1}
//         />
//       </Suspense>
//     </div>
//   );
// };

// export default AdminSpecialitiesManagementPage;






import SpecialitiesManagementHeader from "@/components/modules/Admin/SpecialitiesManagement/SpecialitiesManagementHeader";
import SpecialitiesTable from "@/components/modules/Admin/SpecialitiesManagement/SpecialitiesTable";
import RefreshButton from "@/components/shared/RefreshButton";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { getSpecialities } from "@/services/admin/specialitiesManagement";

import { Suspense } from "react";

const AdminSpecialitiesManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; limit?: string }>; // Next.js 15: searchParams is a Promise
}) => {
  const { page, limit } = await searchParams; // 👈 await it in Next.js 15

  const result = await getSpecialities({
    page: Number(page) || 1,
    limit: Number(limit) || 10,
  });

  return (
    <div className="space-y-6">
      <SpecialitiesManagementHeader />
      <div className="flex">
        <RefreshButton />
      </div>
      <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
        <SpecialitiesTable specialities={result.data} />
        <TablePagination
          currentPage={result?.meta?.page || 1}
          totalPages={result?.meta?.totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default AdminSpecialitiesManagementPage;
