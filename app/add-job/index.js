import React, { useState } from "react";

const JobForm = () => {
  const [jobPositionForm, setJobPositionForm] = useState({
    positionName: "",
    description: "",
    department: "",
    requirements: "",
    phases: [{ phase: "", sequenceNumber: "" }],
  });

  const handleJobPositionChange = (field, value) => {
    setJobPositionForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleJobPositionSubmit = () => {
    // Add backend processing logic here
    console.log("Job Position Form Data:", jobPositionForm);
  };

  const handlePhaseChange = (index, field, value) => {
    const updatedPhases = [...jobPositionForm.phases];
    updatedPhases[index][field] = value;
    setJobPositionForm((prev) => ({ ...prev, phases: updatedPhases }));
  };

  const handleAddPhase = () => {
    setJobPositionForm((prev) => ({
      ...prev,
      phases: [...prev.phases, { phase: "", sequenceNumber: "" }],
    }));
  };

  const handleDeletePhase = (indexToDelete) => {
    setJobPositionForm((prev) => ({
      ...prev,
      phases: prev.phases.filter((_, index) => index !== indexToDelete),
    }));
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-10 text-center underline pb-10">
        Create Job Position
      </h2>
      <form className="space-y-4 md:ml-auto md:mr-auto ml-5 mr-5">
        {/* Job Position Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>Position Name</label>
            <input
              type="text"
              value={jobPositionForm.positionName}
              onChange={(e) =>
                handleJobPositionChange("positionName", e.target.value)
              }
              placeholder="Enter position name"
              className="w-full border p-2 shadow-sm"
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              value={jobPositionForm.description}
              onChange={(e) =>
                handleJobPositionChange("description", e.target.value)
              }
              placeholder="Enter description"
              className="w-full border p-2 shadow-sm"
            />
          </div>
          <div>
            <label>Department</label>
            <input
              type="text"
              value={jobPositionForm.department}
              onChange={(e) =>
                handleJobPositionChange("department", e.target.value)
              }
              placeholder="Enter department"
              className="w-full border p-2 shadow-sm"
            />
          </div>
          <div>
            <label>Requirements</label>
            <textarea
              value={jobPositionForm.requirements}
              onChange={(e) =>
                handleJobPositionChange("requirements", e.target.value)
              }
              placeholder="Enter requirements"
              className="w-full border p-2 shadow-sm"
            />
          </div>
        </div>

        {/* Process Phases */}
        <div>
          {jobPositionForm.phases.length > 0 && <label>Phases</label>}
          {jobPositionForm.phases.map((phase, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row space-y-2 md:space-x-2 mb-2"
            >
              <div className="md:w-1/2">
                <select
                  value={phase.phase}
                  onChange={(e) =>
                    handlePhaseChange(index, "phase", e.target.value)
                  }
                  className="w-full md:w-2/3 border p-2 shadow-sm"
                >
                  <option value="" selected>
                    Select Phase
                  </option>
                  <option value="ApplicationReview">Application Review</option>
                  <option value="CodeAssessment1">Code Assessment</option>
                  <option value="TechnicalInterview1">
                    Technical Interview
                  </option>
                  <option value="CodeAssessment2">Code Assessment</option>
                  <option value="FinalInterview">Final Interview</option>
                </select>
              </div>
              <div className="md:w-1/2">
                <input
                  type="number"
                  value={phase.sequenceNumber}
                  onChange={(e) =>
                    handlePhaseChange(index, "sequenceNumber", e.target.value)
                  }
                  placeholder="Enter sequence number"
                  className="w-full border p-2 shadow-sm"
                />
              </div>
              <button
                type="button"
                onClick={() => handleDeletePhase(index)}
                className="bg-red-500 h-fit py-2 flex text-center justify-center text-white px-4 hover:opacity-70 hover:scale-[1.05]"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddPhase}
            className="bg-blue-500 text-white px-4 py-2 hover:opacity-70 hover:scale-[1.05]"
          >
            Add Phase
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleJobPositionSubmit}
            className="bg-green-500 text-white px-4 py-2 hover:opacity-70 hover:scale-[1.05]"
          >
            Submit Job Position
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
