import SpecialitiesManagementHeader from "@/components/modules/Admin/SpecialitiesManagement/SpecialitiesManagementHeader";
import SpecialitiesTable from "@/components/modules/Admin/SpecialitiesManagement/SpecialitiesTable";
import RefreshButton from "@/components/shared/RefreshButton";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { getSpecialities } from "@/services/admin/specialitiesManagement";
import { Suspense } from "react";

const AdminSpecialitiesManagementPage = async () => {
  const result = await getSpecialities();
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
