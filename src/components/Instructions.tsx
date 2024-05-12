/* eslint-disable react-hooks/rules-of-hooks */
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppState } from '../state/state';
import { InstructionProps } from '../@types';

const instruction = {
  1: () => {
    const { register, handleSubmit } = useForm<InstructionProps>();
    const setActivePage = useAppState((s) => s.setActivePage);
    const setInstructionValues = useAppState((s) => s.setInstructionValues);
    const onSubmit: SubmitHandler<InstructionProps> = (data) => {
      setInstructionValues(data);
      setActivePage('recommendations');
    };

    return (
      <div>
        <h2>Instruction page</h2>
        <h2>Welcome to RSAI, your AI-powered recommender system</h2>
        <p>
          Our goal is to simplify your travel planning process by providing personalized flight suggestions that cater
          to your unique preferences.
        </p>
        <p>Here’s how it works:</p>
        <ul>
          <li>You will be presented with two curated flight options based on the information you provide.</li>
          <li>Pay attention to the details and choose the option that best suits your travel needs.</li>
          <li>Once you’ve made a decision, we will record your choice along with the time taken to decide.</li>
          <li>Once you’ve started the task, you cannot go back or change your windows.</li>
        </ul>
        <p>To start, we'll need some basic information:</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <br />
          <label htmlFor="preferredDestination">Preferred Destination:</label>
          <select id="preferredDestination" {...register('preferredDestination', { required: true })}>
            <option value="">Select</option>
            <option value="Malaga, Spain">Malaga, Spain</option>
            <option value="Paris, France">Paris, France</option>
            <option value="Milan, Italy">Milan, Italy</option>
          </select>
          <br />
          <label htmlFor="layoverDuration">Layover Duration:</label>
          <select id="layoverDuration" {...register('layoverDuration', { required: true })}>
            <option value="">Select</option>
            <option value="None">None</option>
            <option value="2 hours">2 hours</option>
            <option value="3 hours">3 hours</option>
          </select>

          <br />
          <label htmlFor="budget">Budget:</label>
          <select id="budget" {...register('budget', { required: true })}>
            <option value="">Select</option>
            <option value={350}>350 USD</option>
            <option value={450}>450 USD</option>
            <option value={500}>500 USD</option>
          </select>

          <br />
          <label htmlFor="seatPreference">Seat Preference:</label>
          <select id="seatPreference" {...register('seatPreference', { required: true })}>
            <option value="">Select</option>
            <option value="Aisle">Aisle</option>
            <option value="Window">Window</option>
          </select>

          <input type="submit" value="Click here to see AI generated recommendation"></input>
        </form>
      </div>
    );
  },
  2: () => {
    const { register, handleSubmit } = useForm<InstructionProps>();
    const setInstructionValues = useAppState((s) => s.setInstructionValues);
    const setActivePage = useAppState((s) => s.setActivePage);
    const onSubmit: SubmitHandler<InstructionProps> = (data) => {
      setInstructionValues(data);
      setActivePage('recommendations');
    };

    return (
      <div>
        <h2>Instruction page</h2>
        <h2>Welcome to RSAI, your AI-powered recommender system</h2>
        <p>
          Our goal is to simplify your fitness planning process by providing personalized workout suggestions that cater
          to your unique goals.
        </p>
        <p>Here’s how it works:</p>
        <ul>
          <li>You will be presented with two curated workout options based on the information you provide.</li>
          <li>Pay attention to the details and choose the option that best suits your fitness needs.</li>
          <li>Once you’ve made a decision, we will record your choice along with the time taken to decide.</li>
          <li>Once you’ve started the task, you cannot go back or change your selections.</li>
        </ul>
        <p>To start, we'll need some basic information:</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <br />
          <label htmlFor="fitnessGoal">Preferred Fitness Goal:</label>
          <br />
          <select id="fitnessGoal" {...register('fitnessGoal', { required: true })}>
            <option value="">Select</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Endurance">Endurance</option>
          </select>

          <br />
          <label htmlFor="timePerSession">Preferred Time Per Session (minutes per week):</label>
          <br />
          <select id="timePerSession" {...register('timePerSession', { required: true })}>
            <option value="">Select</option>
            <option value="60 minutes">60 minutes</option>
            <option value="90 minutes">90 minutes</option>
            <option value="120 minutes">120 minutes</option>
          </select>

          <br />
          <label htmlFor="sessionsPerWeek">Preferred Sessions Per Week:</label>
          <br />
          <select id="sessionsPerWeek" {...register('sessionsPerWeek', { required: true })}>
            <option value="">Select</option>
            <option value={3}>3 days</option>
            <option value={4}>4 days</option>
            <option value={4}>5 days</option>
          </select>

          <input type="submit" value="Click here to see AI generated recommendation"></input>
        </form>
      </div>
    );
  },
  3: () => {
    const { register, handleSubmit } = useForm<InstructionProps>();
    const setInstructionValues = useAppState((s) => s.setInstructionValues);
    const setActivePage = useAppState((s) => s.setActivePage);
    const onSubmit: SubmitHandler<InstructionProps> = (data) => {
      setInstructionValues(data);
      setActivePage('recommendations');
    };

    return (
      <div>
        <h2>Instruction page</h2>
        <h2>Welcome to RSAI, your AI-powered recommender system</h2>
        <p>
          Our goal is to simplify your travel planning process by providing personalized flight suggestions that cater
          to your unique preferences.
        </p>
        <p>Here’s how it works:</p>
        <ul>
          <li>You will be presented with two curated flight options based on the information you provide.</li>
          <li>Pay attention to the details and choose the option that best suits your travel needs.</li>
          <li>Once you’ve made a decision, we will record your choice along with the time taken to decide.</li>
          <li>Once you’ve started the task, you cannot go back or change your windows.</li>
        </ul>
        <p>To start, we'll need some basic information:</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <br />
          <label htmlFor="learningGoal">Learning goal:</label>
          <br />
          <select id="learningGoal" {...register('learningGoal', { required: true })}>
            <option value="">Select</option>
            <option value="Gain new professional skill">Gain new professional skill</option>
            <option value="Self improvement">Self improvement</option>
            <option value="Preparation for certification">Preparation for certification</option>
          </select>

          <br />
          <label htmlFor="learningMethods">Preferred learning methods:</label>
          <br />
          <select id="learningMethods" {...register('learningMethods', { required: true })}>
            <option value="">Select</option>
            <option value="Video lectures">Video lectures</option>
            <option value="Interactive tutorial">Interactive</option>
            <option value="Lecture slides">Lecture slides</option>
          </select>

          <br />
          <label htmlFor="timePerWeek">Preferred time per week:</label>
          <br />
          <select id="timePerWeek" {...register('timePerWeek', { required: true })}>
            <option value="">Select</option>
            <option value={2}>2 hours</option>
            <option value={5}>5 hours</option>
            <option value={10}>10 hours</option>
          </select>

          <br />
          <label htmlFor="fieldOfStudy">Preferred field of study:</label>
          <br />
          <select id="fieldOfStudy" {...register('fieldOfStudy', { required: true })}>
            <option value="">Select</option>
            <option value="Data Science">Data Science</option>
            <option value="Marketing">Marketing</option>
            <option value="Graphic design">Graphic design</option>
          </select>
          <br />
          <input type="submit" value="Click here to see AI generated recommendation"></input>
        </form>
      </div>
    );
  },
};

export default function Instructions() {
  const instructionPageNumber = useAppState((s) => s.instructionPageNumber);
  // @ts-expect-error it will work
  return instruction[instructionPageNumber]();
}
