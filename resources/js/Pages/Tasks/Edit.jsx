import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { useEffect } from 'react';

export default function EditTask(props) {
    /**
     * Little security checkup
     */
    if(props.auth.user.id != props.task.user_id) return router.get(route('tasks.index'));

    const { data, setData, patch, processing, errors, reset } = useForm({
        title: props.task.title,
        user_id: props.task.user_id
    });

    const submit = (event) => {
        event.preventDefault();

        patch('/tasks/' + props.task.id);
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tasks</h2>}
        >
            <Head title="Edit task" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div>
                        <Link href="/tasks" as="button" type="button" className="border border-purple-500 text-purple-500 rounded p-2 mb-10 w-32">
                            Go back
                        </Link>
                    </div>

                    <div className="md:w-1/3">
                        <form onSubmit={submit}>
                            <InputLabel htmlFor="title" value="Title" />

                            <TextInput
                                id="title"
                                type="text"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full"
                                autoComplete="title"
                                onChange={(event) => setData(event.target.name, event.target.value)}
                            />

                            <InputError message={errors.title} className="mt-2" />

                            <button className="bg-purple-500 text-white rounded p-2 mb-10 w-32 mt-5"  disabled={processing}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
