import { 
    getAllCheques as model_getAllCheques, 
    markCleared as model_markCleared 
} from '../models/cheques.js';

export async function getAllCheques(req, res) {
    try {
        const all = await model_getAllCheques();
        res.json({ cheques: all });
    } catch (error) {
        console.error('Error getting all cheques:', error);
        res.status(500).json({ success: false, message: 'Failed to retrieve cheques.' });
    }
}

export async function markCleared(req, res) {
    const { cheque_id } = req.body;
    try {
        await model_markCleared(cheque_id);
        res.json({ success: true });
    } catch (error) {
        console.error('Error marking cheque as cleared:', error);
        res.status(500).json({ success: false, message: 'Failed to mark cheque as cleared.' });
    }
}
