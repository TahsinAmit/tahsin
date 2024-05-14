import { countries } from 'countries-list';
import { useState } from 'react';
import { useAppState } from '../state/state';
import { SubmitHandler, useForm } from 'react-hook-form';
import { HomePageProps } from '../@types';

export default function Home() {
  const { register, handleSubmit } = useForm<HomePageProps>();
  const setActivePage = useAppState((s) => s.setActivePage);
  const setHomePageProps = useAppState((s) => s.setHomePageProps);
  const [customEthnicity, setCustomEthnicity] = useState(false);
  const [customGender, setCustomGender] = useState(false);
  const [customHomeOwnership, setCustomHomeOwnership] = useState(false);

  const onSubmit: SubmitHandler<HomePageProps> = (data) => {
    setHomePageProps(data);
    setActivePage('instructions');
  };
  return (
    <div>
      <h1>Home page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="ageGroup">What is your age group?</label>
        <select {...register('ageGroup', { required: true })} id="ageGroup">
          <option value="">Select</option>
          <option value="Under 18">Under 18</option>
          <option value="18 to 30">18 to 30</option>
          <option value="30 to 45">30 to 45</option>
          <option value="45 to 64">45 to 64</option>
          <option value="over 64">Over 64</option>
        </select>

        <br />

        {/* <label htmlFor="ethnicity">How would you describe your ethnicity?</label>
        <select
          id="ethnicity"
          {...register('ethnicity', {
            required: true,
            onChange(event) {
              setCustomEthnicity(event.target.value === 'Some other race');
            },
          })}
        >
          <option value="">Select</option>
          <option value="Black or African-American">Black or African-American</option>
          <option value="American Indian or Alaskan Native">American Indian or Alaskan Native</option>
          <option value="Asian">Asian</option>
          <option value="Native Hawaiian or other Pacific islander">Native Hawaiian or other Pacific islander</option>
          <option value="From multiple races">From multiple races</option>
          <option value="Some other race">Some other race (please specify)</option>
          <option value="Prefer not to disclose">Prefer not to disclose</option>
        </select>
        {customEthnicity && <input type="text" {...{ ...register('customEthnicity', { required: true }) }}></input>}
        <br />

        <label htmlFor="gender">Which gender do you identify with?</label>
        <select
          id="gender"
          {...register('gender', {
            required: true,
            onChange(event) {
              setCustomGender(event.target.value === 'Something else');
            },
          })}
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Something else">Something else (please specify)</option>
          <option value="Prefer not say">Prefer not say</option>
        </select>
        {customGender && <input type="text" {...register('customGender', { required: true })}></input>}
        <br />
        <label htmlFor="country">What is your country of residence?</label>
        <select id="country" {...register('country', { required: true })}>
          <option value="">Select</option>
          {Object.values(countries).filter(c => c.name !== 'Antarctica')
            //@ts-expect-error
            .sort((a, b) => a.name > b.name)
            .map(c => <option value={c.name} key={c.name}>{c.name}</option>)
          }
        </select>

        <br />

        <label htmlFor="education">What is the highest level of education you have completed?</label>
        <select id="education" {...register('education', { required: true })}>
          <option value="">Select</option>
          <option value="Less than high school degree">Less than high school degree</option>
          <option value="High school degree or equivalent (e.g., GED)">
            High school degree or equivalent (e.g., GED)
          </option>
          <option value="Some college but no degree">Some college but no degree</option>
          <option value="Associate degree">Associate degree</option>
          <option value="Bachelor degree">Bachelor degree</option>
          <option value="Graduate degree (e.g., Masters, PhD, M.D)">Graduate degree (e.g., Masters, PhD, M.D)</option>
        </select>

        <br />
        <label htmlFor="maritalStatus">What is your marital status?</label>
        <select id="maritalStatus" {...register('maritalStatus', { required: true })}>
          <option value="">Select</option>
          <option value="Married">Married</option>
          <option value="Never married">Never married</option>
          <option value="Widowed">Widowed</option>
          <option value="Divorced">Divorced</option>
          <option value="Separated">Separated</option>
        </select>
        <br />
        <label htmlFor="employment">What is your current employment status?</label>
        <select id="employment" {...register('employment', { required: true })}>
          <option value="">Select</option>
          <option value="Employed part time">Employed part time</option>
          <option value="Employed full time">Employed full time</option>
          <option value="Not employed, looking for work">Not employed, looking for work</option>
          <option value="Not employed, not looking for work">Not employed, not looking for work</option>
          <option value="Retired">Retired</option>
          <option value="Disabled, not able to work">Disabled, not able to work</option>
          <option value="Prefer not to disclose">Prefer not to disclose</option>
        </select>
        <br />
        <label htmlFor="income">What is your annual household income range?</label>
        <select id="income" {...register('income', { required: true })}>
          <option value="">Select</option>
          <option value="$0 – $9,999">$0 – $9,999</option>
          <option value="$10,000 – $19,999">$10,000 – $19,999</option>
          <option value="$20,000 – $29,999">$20,000 – $29,999</option>
          <option value="$30,000 – $39,999">$30,000 – $39,999</option>
          <option value="$40,000 – $49,999">$40,000 – $49,999</option>
          <option value="$50,000 – $59,999">$50,000 – $59,999</option>
          <option value="$60,000 – $69,999">$60,000 – $69,999</option>
          <option value="$70,000 – $79,999">$70,000 – $79,999</option>
          <option value="$80,000 – $89,999">$80,000 – $89,999</option>
          <option value="$90,000 – $99,999">$90,000 – $99,999</option>
          <option value="$100,000 or more">$100,000 or more</option>
          <option value="Prefer not to disclose">Prefer not to disclose</option>
        </select>
        <br />
        <label htmlFor="householdSize">How many people are currently living in your house?</label>
        <select id="householdSize" {...register('householdSize', { required: true })}>
          <option value="">Select</option>
          <option value="None">None</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4 or more">4 or more</option>
        </select>

        <br />

        <label htmlFor="homeOwnership">Do you currently own or rent your home?</label>
        <select id="homeOwnership" {
          ...register('homeOwnership', {
            required: true, onChange(event) {
              setCustomHomeOwnership(event.target.value === 'Other rent');
            },
          },)
        }>
          <option value="">Select</option>
          <option value="Own my home">Own my home</option>
          <option value="Rent my home">Rent my home</option>
          <option value="Other rent">Other (please specify)</option>
          <option value="Prefer not say">Prefer not say</option>
        </select>
        {customHomeOwnership && <input type="text" {...register('customHomeOwnership', { required: true })}></input>}
        <br />
        <label htmlFor="bestFriend">Who is your best friend whose recommendations you would always trust?</label>
        <input type="text" id="bestFriend" {...register('bestFriend', { required: true })}></input>
        <br />
        <label htmlFor="authorityFigure">Which authority figure would you trust more?</label>
        <select id="authorityFigure" {...register('authorityFigure', { required: true })}>
          <option value="">Select</option>
          <option value="Government officials">Government officials</option>
          <option value="Local police">Local police</option>
          <option value="Medical professional">Medical professional</option>
          <option value="Academic experts">Academic experts</option>
          <option value="Community leaders">Community leaders</option>
        </select>
        <br />
        <label htmlFor="environmentalChoices">How dedicated are you to making environmentally friendly choices?</label>
        <select id="environmentalChoices" {...register('environmentalChoices', { required: true })}>
          <option value="">Select</option>
          <option value="Highly likely">Highly likely</option>
          <option value="Likely">Likely</option>
          <option value="Neutral">Neutral</option>
          <option value="Unlikely">Unlikely</option>
          <option value="Highly unlikely">Highly unlikely</option>
        </select>
        <br />
        <input type="checkbox" id="medicationAck" {...register('medicationAck', { required: true })} />
        <label htmlFor="medicationAck">
          I hereby confirm that I am not currently under any medication that could impair my judgment or cognitive
          abilities, and I am fully aware and capable of participating in this study.
        </label>
        <br />
        <input type="checkbox" id="visionAck" {...register('visionAck', { required: true })} />
        <label htmlFor="visionAck">
          I affirm that my vision is normal or corrected to normal, which will not hinder my participation in activities
          requiring visual assessment.
        </label>

        <br /> */}
        <input type="submit" value="Go to instructions" />
      </form>
    </div>
  );
}
