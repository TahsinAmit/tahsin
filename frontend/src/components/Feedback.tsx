import { SubmitHandler, useForm } from 'react-hook-form';
import { FeedbackProps } from '../@types';
import { useAppState } from '../state/state';

export default function Feedback() {
  const sessionId = useAppState((s) => s.sessionId);
  const homePageProps = useAppState((s) => s.homePageProps);
  const instructionPageNumber = useAppState((s) => s.instructionPageNumber);
  const instructionValues = useAppState((s) => s.instructionValues);
  const recommendationValues = useAppState((s) => s.recommendationValues);
  const setActivePage = useAppState((s) => s.setActivePage);
  const { register, handleSubmit } = useForm<FeedbackProps>();
  const onSubmit: SubmitHandler<FeedbackProps> = async (feedbackProps) => {
    const payload = {
      sessionId,
      instructionPageNumber,
      ...homePageProps,
      ...instructionValues,
      ...recommendationValues,
      ...feedbackProps,
    };
    console.log(JSON.stringify({ payload }, null, 2));
    await fetch('/survey', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((r) => r.json());
    localStorage.setItem('survey_complete', 'true');
    setActivePage('surveyComplete');
  };
  return (
    <div>
      <h1>Feedback page!</h1>
      <form id="feedbackForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <p>I found the flight recommendation provided to me to be trustworthy.</p>
          <label>
            <input type="radio" {...register('trustworthy', { required: true })} defaultValue={1} /> Strongly Disagree
          </label>
          <label>
            <input type="radio" {...register('trustworthy', { required: true })} defaultValue={2} /> Disagree
          </label>
          <label>
            <input type="radio" {...register('trustworthy', { required: true })} defaultValue={3} /> Neither Agree nor
            Disagree
          </label>
          <label>
            <input type="radio" {...register('trustworthy', { required: true })} defaultValue={4} /> Agree
          </label>
          <label>
            <input type="radio" {...register('trustworthy', { required: true })} defaultValue={5} /> Strongly Agree
          </label>
        </div>
        {/* Ensure 'name' attribute is unique for each question */}
        <div className="form-group">
          <p>The source of the recommendation influenced my trust in the suggestion.</p>
          {/* Example for a second question with a unique 'name' */}
          <label>
            <input type="radio" {...register('sourceInfluence', { required: true })} defaultValue={1} /> Strongly
            Disagree
          </label>
          <label>
            <input type="radio" {...register('sourceInfluence', { required: true })} defaultValue={2} /> Disagree
          </label>
          <label>
            <input type="radio" {...register('sourceInfluence', { required: true })} defaultValue={3} /> Neither Agree
            nor Disagree
          </label>
          <label>
            <input type="radio" {...register('sourceInfluence', { required: true })} defaultValue={4} /> Agree
          </label>
          <label>
            <input type="radio" {...register('sourceInfluence', { required: true })} defaultValue={5} /> Strongly Agree
          </label>
        </div>
        {/* Repeat for each statement, changing the 'name' for each to be unique */}
        {/* Example for the last statement to illustrate unique 'name' usage */}
        <div className="form-group">
          <p>Based on this experience, I would trust an AI-generated recommendation for future travel planning.</p>
          <label>
            <input type="radio" {...register('futureTrust', { required: true })} defaultValue={1} /> Strongly Disagree
          </label>
          <label>
            <input type="radio" {...register('futureTrust', { required: true })} defaultValue={2} /> Disagree
          </label>
          <label>
            <input type="radio" {...register('futureTrust', { required: true })} defaultValue={3} /> Neither Agree nor
            Disagree
          </label>
          <label>
            <input type="radio" {...register('futureTrust', { required: true })} defaultValue={4} /> Agree
          </label>
          <label>
            <input type="radio" {...register('futureTrust', { required: true })} defaultValue={5} /> Strongly Agree
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="likeMost">What did you like most about the flight recommendation process?</label>
          <textarea id="likeMost" {...register('likeMost')} defaultValue={''} />
        </div>
        <div className="form-group">
          <label htmlFor="suggestions">
            What improvements, if any, would you suggest for the flight recommendation process?
          </label>
          <textarea id="suggestions" {...register('suggestions')} defaultValue={''} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
