import { FC } from "react";
import { ReactComponent as LandingPageIllustration } from "@/assets/illustrations/LandingPage.svg";
import { ReactComponent as Logout } from "@icons/Logout.svg";
import FeedbackCard from "@ui/FeedbackCard";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui";
import { ReactComponent as JecLogo } from "@/assets/illustrations/jec-logo.svg";

const LandingPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="my-8  flex min-h-[96vh] flex-col items-center justify-center gap-4 p-2">
      <Button as={NavLink} to="/auth/sign-in" className="ml-auto mr-6">
        <Logout />
        Login
      </Button>
      <header className="flex items-center justify-between text-center text-2xl text-blue-800">
        <JecLogo className="h-24 w-24" />
        <h1 className="text-4xl font-semibold text-blue-800">
          Jaya Engineering College
        </h1>
      </header>
      <main className="w-full space-y-4 px-4">
        <LandingPageIllustration className="w-full" />

        <h2 className="text-2xl font-semibold text-blue-800">
          Feedback System
        </h2>
        <p className="text-gray-700">
          <span className="mb-2 block text-lg font-semibold">
            Welcome to the Jaya Engineering College Feedback System!
          </span>
          As an employer or alumni of a college or university, you understand
          the value of feedback in improving the educational experience for
          future students. This platform allows you to provide valuable insights
          and feedback on your experience as a student, helping the college or
          university to enhance their offerings and better prepare students for
          their future careers. Your feedback can help shape the education of
          the next generation of students, and we are excited to have you as a
          part of this important process.
        </p>

        <section className="space-y-4">
          <FeedbackCard
            title="Alumni Feedback Form"
            action={() => {
              navigate("/alumni-feedback");
            }}
          />
          <FeedbackCard
            title="Employer Feedback Form"
            action={() => {
              navigate("/employer-feedback");
            }}
          />
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
