import { BenefitItem } from 'app/components/Benefits/BenefitItem';

import { benefitsData } from 'app/components/Benefits/tempData';

import scss from './Benefits.module.scss';

export const Benefits = () => {
    return (
        <ul className={scss.benefits_wrapper}>
            {benefitsData.map((b, index) => (
                <BenefitItem delay={index} key={index} {...b} />
            ))}
        </ul>
    );
};