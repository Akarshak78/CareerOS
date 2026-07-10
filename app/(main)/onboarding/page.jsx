import { industries } from "@/data/industries";
import OnboardingForm from "./_components/onboarding-form";
import { getUserOnboardingStatus, getUserProfile } from "@/actions/user";

export default async function OnboardingPage() {
  const { isOnboarded } = await getUserOnboardingStatus();
  const user = isOnboarded ? await getUserProfile() : null;

  return (
    <main>
      <OnboardingForm industries={industries} initialData={user} />
    </main>
  );
}