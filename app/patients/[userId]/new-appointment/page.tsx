import { getPatient } from "@/actions/patient.actions";
import { AppointmentForm } from "@/components/forms/appointment-form";
import Image from "next/image";

export default async function Page({ params: { userId } }: SearchParamProps) {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src={"/assets/icons/logo-full.svg"}
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
            alt="patient"
          />
          <AppointmentForm
            patientId={patient.$id}
            type="create"
            userId={userId}
          />

          <p className="copyright mt-10 py-12">© 2024 CarePulse</p>
        </div>
      </section>

      <Image
        src={"/assets/images/appointment-img.png"}
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
