import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Accordion } from '@components';

export interface ICVForm {}

type Inputs = {
  name: string;
  email: string;
  summary: string;
};

function CVForm({}: ICVForm) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  // Watch all fields in the form
  const watchedFields = watch();
  useEffect(() => {
    console.log('Form changes:', watchedFields);
  }, [watchedFields]);

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="collapse collapse-arrow bg-base-200 mb-6">
        <input type="radio" name="my-accordion-2" checked />
        <div className="collapse-title text-xl font-medium">
          Basic Information
        </div>
        <div className="collapse-content">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          {/* <div>
          <label>Name:</label>
          <input {...register('name', { required: true })} />
          {errors.name && <p>This field is required</p>}
        </div> */}
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 mb-6">
        <input type="radio" name="my-accordion-2" checked />
        <div className="collapse-title text-xl font-medium">Experience</div>
        <div className="collapse-content">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Job</span>
            </label>
            <input
              {...register('job', { required: true })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          {/* <div>
          <label>Name:</label>
          <input {...register('name', { required: true })} />
          {errors.name && <p>This field is required</p>}
        </div> */}
        </div>
      </div>

      <button className="btn bg-blue text-white" type="submit">
        Download CV
      </button>
    </form>
  );
}

export default CVForm;
