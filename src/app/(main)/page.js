import { redirect } from "next/navigation";

export const metadata = {
  title: "Dragon News || Home",
  description: "Best News Portal In Bangladesh",
};


export default async function Home() {
  redirect(`/category/${'01'}`)
}
