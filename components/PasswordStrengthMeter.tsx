import React from 'react';
import zxcvbn from 'zxcvbn';

interface PasswordStrengthMeterProps {
    password: string;  
}

const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({ password }) => {
    const calculateStrength = (password: string) => {
        const result = zxcvbn(password);
        return result.score;
    }

    const getColor = (score: number): string => {
        switch (score) {
            case 0:
                return 'red';
                case 1:
                    return 'red';
                    case 2:
                        return 'orange';
                        case 3:
                            return 'yellow';
                            case 4:
                                return 'green';
                                default:
                                    return 'black';
        }
    }

    const strength = calculateStrength(password);

    return (
        <div className="mt-4">
            <label>Password strength:</label>
            <div className="relative">
                <meter
                    className="max-w-full"
                    max="4"
                    value={strength}
                    low="1"
                    high="3"
                    optimum="4"
                    style={{color: getColor(strength), fontWeight: 'bold'}}
                ></meter>
                <span
                    className="absolute bottom-0 right-0 px-20"
                    style={{ color: getColor(strength), fontWeight: 'bold'}}
                >
                    {strength === 0 ? 'weak' : strength === 1 ? 'fair' : strength === 2 ? 'medium' : strength === 3 ? 'good' : 'strong'}
                </span>
            </div>
        </div>
    )
}

export default PasswordStrengthMeter;
