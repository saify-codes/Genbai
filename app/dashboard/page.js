import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import AppLayout from "@/layout/app"

const items = [
  { title: 'Project Name', href: '/project-name' },
  { title: 'Team Name (Workflow Type)', href: 'team-name' },
  { title: 'Backlog', href: 'backlog' },
]


export default function () {
  return (
    <AppLayout>
      <BreadCrumb data={items}/>
      <h1 className="mt-2 text-2xl font-bold">Dashboard</h1>
    </AppLayout>
  );
}
