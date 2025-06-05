import { redirect } from 'next/navigation'

// This page is used to redirect the user to the default language page
export default function Page() {
  redirect('/en');
}
