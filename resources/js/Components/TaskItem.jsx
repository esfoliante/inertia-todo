import { Check, ChevronLeft, ChevronRight, Edit2, X } from "react-feather";
import { router, Link } from '@inertiajs/react';

export default function TaskItem({ task }) {
    const changeState = (event, task) => {
        event.preventDefault();

        router.post(route('tasks.change-state'), {
            task: task
        });
    }

    return(
        <div className={`w-full flex items-center justify-between border border-gray-100 p-4 shadow-sm rounded`}>
            <p className={`${task.is_done ? 'line-through' : ''}`}>
                { task.title }
            </p>
            <div className="flex space-x-3">
                <form onSubmit={(event) => changeState(event, task)}>
                    <button className="bg-purple-500 text-white rounded p-2">
                        {
                            !task.is_done ?
                                <ChevronRight size={20} />
                            :
                                <ChevronLeft size={20} />
                        }
                    </button>
                </form>
                {
                    !task.is_done ?
                        <Link as="button" type="button" href={`/tasks/${task.id}`} className="bg-purple-500 text-white rounded p-2">
                            <Edit2 size={20} />
                        </Link>
                    :
                        <Link as="button" type="button" method="delete" href={`/tasks/${task.id}`} className="bg-purple-500 text-white rounded p-2">
                            <X size={20} />
                        </Link>
                }
            </div>
        </div>
    )
}
