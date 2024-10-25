import { useEffect, useState } from "react";
import ChipSelector from "./TechnologiesChips"
import { useForm } from 'react-hook-form';
import BootcampService from "../services/BootcampService";

export const BootcampForm = ({ bootcamp, onComplete }) => {
    const { register, handleSubmit, setValue, reset} = useForm();
    //let [bootcamp,] = useState(props.bootcamp);
    const handleChipUpdate = (chips) => {
        setValue('technologies', chips.join(","));
    }

    useEffect(() => {
        setValue('name', bootcamp?.name);
        setValue('description', bootcamp?.description);
        setValue('technologies', bootcamp?.technologies.join(","));
        setValue('id', bootcamp?.id);
        console.log(bootcamp);
    }, []);

    //SAVE & ADD BOOTCAMP
    const onSaveBootcamp = async (bootcamp) => {
        const bootcampService = new BootcampService();

        if (bootcamp.id) { 
            await bootcampService.updateBootcamp(bootcamp.id, bootcamp)
        } else {
            await bootcampService.addBootcamp(bootcamp)
        }
        reset();
        onComplete();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSaveBootcamp)}>
                <div className="mb-3">
                    <label className="form-label">name</label>
                    <input type="text" {...register('name')} className="form-control" name="name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" {...register('description')} className="form-control" name="description" />
                </div>
                <input type="hidden" {...register('technologies')}></input>
                <input type="hidden" {...register('id')}></input>
                <ChipSelector onUpdateChips={handleChipUpdate} initialChips={bootcamp?.technologies ?? []} />
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
            </form>
        </div>

    )
}