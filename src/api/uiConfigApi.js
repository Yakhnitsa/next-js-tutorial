import fsPromises from 'fs/promises';
import path from 'path'

export const jsonUIConfigApi = async (merchantCode) => {
    const filePath = path.join(process.cwd(), `src/api/${merchantCode}.json`);
    try{
        const jsonData = await fsPromises.readFile(filePath);
        return JSON.parse(jsonData);
    } catch (e) {
        return {}
    }
}