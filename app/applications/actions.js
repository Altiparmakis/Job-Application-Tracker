"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

const jobTypes = new Set(["INTERNSHIP", "FULL_TIME", "PART_TIME"]);
const statuses = new Set([
  "SAVED",
  "APPLIED",
  "SCREEN",
  "INTERVIEWING",
  "OFFER",
  "REJECTED",
  "ACCEPTED",
]);

function getString(formData, name) {
  const value = formData.get(name);

  return typeof value === "string" ? value.trim() : "";
}

export async function createJobApplication(formData) {
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      message: "You must be signed in to add an application.",
    };
  }

  const title = getString(formData, "title");
  const companyName = getString(formData, "companyName");
  const description = getString(formData, "description");
  const url = getString(formData, "url");
  const location = getString(formData, "location");
  const jobType = getString(formData, "jobType");
  const status = getString(formData, "status");

  if (!title || !companyName || !jobType || !status) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  if (!jobTypes.has(jobType) || !statuses.has(status)) {
    return {
      success: false,
      message: "Please choose valid job type and status values.",
    };
  }

  const application = await prisma.jobApplication.create({
    data: {
      clerkId: userId,
      title,
      companyName,
      description: description || null,
      url: url || null,
      location: location || null,
      jobType,
      status,
    },
    select: {
      id: true,
      title: true,
      companyName: true,
      location: true,
      status: true,
    },
  });

  revalidatePath("/applications");

  return {
    success: true,
    message: "Application saved.",
    application,
  };
}

export async function updateJobApplicationStatus(applicationId, status) {
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      message: "You must be signed in to update an application.",
    };
  }

  if (!applicationId || !statuses.has(status)) {
    return {
      success: false,
      message: "Please choose a valid status.",
    };
  }

  const result = await prisma.jobApplication.updateMany({
    where: {
      id: applicationId,
      clerkId: userId,
    },
    data: {
      status,
    },
  });

  if (result.count === 0) {
    return {
      success: false,
      message: "Application could not be updated.",
    };
  }

  revalidatePath("/applications");

  return {
    success: true,
    message: "Application updated.",
  };
}
