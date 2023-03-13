import TaskCard from '@/Components/TaskCard';
import TaskItem from '@/Components/TaskItem';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tasks</h2>}
        >
            <Head title="Tasks" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div>
                        <Link href={route('tasks.create')} as="button" type="button" className="bg-purple-500 text-white rounded p-2 mb-10 w-32">
                            Create task
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-10">
                        <TaskCard title="TODO">
                            {
                                props.tasks.map((task) => {
                                    if(!task.is_done) {
                                        return <TaskItem task={task} key={task.id} />
                                    }
                                })
                            }
                        </TaskCard>

                        <TaskCard title="DONE">
                            {
                                props.tasks.map((task) => {
                                    if(task.is_done) {
                                        return <TaskItem task={task} key={task.id} />
                                    }
                                })
                            }
                        </TaskCard>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
