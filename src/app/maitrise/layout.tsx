import '@/components/maitrise/maitrise-responsive.css';

export const metadata = {
  title: "La Maîtrise | École de chant, Ensemble Vocal et Liturgie - Cathédrale de Sion",
  description: "École de chant liturgique, Ensemble Vocal et Instrumental, cantates de Bach, chant grégorien et liturgie à la Cathédrale de Sion. Direction Catherine Gremaud-Babel."
};

export default function MaitriseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
