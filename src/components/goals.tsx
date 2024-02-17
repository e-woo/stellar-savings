import { useState } from 'react';
import { Goal, fetchGoals } from '../logic/Goal';
import GoalItem from './GoalItem';
import GoalPrompt from './GoalPrompt';

const Goals = () => {
  const [goals, setGoals] = useState<Array<Goal>>(fetchGoals());
  const [promptVisible, setPromptVisible] = useState(false);

  return (
    <div className='flex flex-col p-8 gap-8'>

      <h2 className='text-4xl font-bold text-center'>Goals</h2>
      <ul className='px-4 flex flex-col max-h-[60vh] items-center overflow-y-scroll'>
        {goals.map((goal, index) => {return <li key={index} className='w-full py-2'>
          <GoalItem goal={goal} onFinish={() => {
            setGoals(fetchGoals())}} index={index}/>
        </li>
        })}
        {promptVisible ? <li className='w-full py-2'>
          <GoalPrompt onSave={() => {
            setPromptVisible(false); 
            setGoals(fetchGoals());
          }}/>
        </li> : null}
      </ul>
      <button onClick={() => setPromptVisible(true)} className='py-4 mx-8 rounded-xl bg-red-400'>Add goal</button>
    </div>
  )
}

export default Goals;
