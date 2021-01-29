import { IReferenceUnlockBlock } from "./IReferenceUnlockBlock";
import { ISignatureUnlockBlock } from "./ISignatureUnlockBlock";
import { ITransactionEssence } from "./ITransactionEssence";
import { ITypeBase } from "./ITypeBase";
/**
 * The global type for the payload.
 */
export declare const TRANSACTION_PAYLOAD_TYPE = 0;
/**
 * Transaction payload.
 */
export interface ITransactionPayload extends ITypeBase<0> {
    /**
     * The index name.
     */
    essence: ITransactionEssence;
    /**
     * The unlock blocks.
     */
    unlockBlocks: (ISignatureUnlockBlock | IReferenceUnlockBlock)[];
}
