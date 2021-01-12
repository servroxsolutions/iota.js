// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
import { ITypeBase } from "./ITypeBase";

/**
 * The global type for the unlock block.
 */
export const REFERENCE_UNLOCK_BLOCK_TYPE = 1;

/**
 * Reference unlock block.
 */
export interface IReferenceUnlockBlock extends ITypeBase<1> {
    /**
     * The reference.
     */
    reference: number;
}
