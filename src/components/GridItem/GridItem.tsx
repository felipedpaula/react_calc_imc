import { Level } from '../../helpers/imc';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';
import './styles.css';

type Props = {
    item: Level
};

export const GridItem = ({item}: Props) => {
    return (
        <div className='main' style={{backgroundColor: item.color}}>
            <div className='gridIcon'>
                {item.icon === 'up' && <img src={upImage} alt="Bom" width="30"/>}
                {item.icon === 'down' && <img src={downImage} alt="Bom" width="30"/>}
            </div>
            <div className='gridTitle'>{item.title}</div>

            {item.youImc && 
                <div className='yourImc'>Seu Imc é de {item.youImc} km/m²</div>
            }

            <div className='gridInfo'>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}