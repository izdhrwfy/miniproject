import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "EventPark",
  description: "Event Park Admikn Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
