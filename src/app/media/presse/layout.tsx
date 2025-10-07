export const metadata = {
  title: "Revue de Presse | Articles et Médias - Maîtrise Cathédrale de Sion",
  description: "Retrouvez les articles de presse, interviews et couverture médiatique de la Maîtrise de la Cathédrale de Sion. Actualités musicales et liturgiques en Valais."
};

export default function PresseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
